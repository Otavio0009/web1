-- CreateTable
CREATE TABLE "Todo" (
    "id" SERIAL NOT NULL,
    "texr" TEXT NOT NULL,
    "Complited" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Todo_pkey" PRIMARY KEY ("id")
);
