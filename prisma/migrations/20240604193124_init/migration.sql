-- CreateTable
CREATE TABLE "post" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "post" TEXT NOT NULL,

    CONSTRAINT "post_pkey" PRIMARY KEY ("id")
);
