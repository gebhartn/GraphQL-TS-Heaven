import { prisma } from '../generated/prisma-client';

export default ({ req }: any): any => ({ ...req, prisma });
