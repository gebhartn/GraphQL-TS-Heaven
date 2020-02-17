SHELL := bash
.SHELLFLAGS := -eu -o pipefail -c

# ====================================
# == General =========================
# ====================================

env-%:
	@if [ "${${*}}" = "" ]; then\
		echo "Requires $* to be set"; \
		echo; \
		exit 1; \
	fi


# ====================================
# == Prisma ==========================
# ====================================

prisma-generate:
	@export $$(cat .env | xargs) && \
		echo											 && \
		echo Deploying Prisma			 && \
		cs prisma && prisma deploy

prisma-reseed:
	@export $$(cat .env | xargs) && \
		echo											 && \
		echo Reseeding Prisma			 && \
		cd prisma									 && \
		prisma reset --force			 && \
		prisma seed

prisma-token:
	@export $$(cat .env | xargs) && \
		echo											 && \
		echo Generating token 		 && \
		cd prisma && prisma token

