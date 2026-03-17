FROM node:22-alpine AS base
WORKDIR /app

FROM base AS base-unclean
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
COPY . /app

FROM base-unclean AS prod-deps
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile --prod

FROM base-unclean AS build
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
RUN pnpm run build

FROM base
COPY --from=prod-deps /app/node_modules /app/node_modules
COPY --from=build /app/dist /app/dist
COPY --from=base-unclean /app/LICENSE /app/LICENSE

ENV NODE_ENV=production
ENV PORT=4321
ENV HOST=0.0.0.0
EXPOSE 4321
USER 1000
CMD ["node", "dist/server/entry.mjs"]
