import { GetServerSidePropsContext, NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth"
import type { NextAuthOptions} from "next-auth"   
import BattleNet, { BattleNetIssuer } from "next-auth/providers/battlenet"

export const authConfig = {
    secret:process.env.NEXTAUTH_SECRET as string,
    providers: [ 
      BattleNet({
        clientId: process.env.BATTLENET_CLIENT_ID as string,
        clientSecret: process.env.BATTLENET_CLIENT_SECRET as string,
        issuer: process.env.BATTLENET_ISSUER as BattleNetIssuer
      })
    ],
} satisfies NextAuthOptions;

export function auth(...args: [GetServerSidePropsContext["req"], GetServerSidePropsContext["res"]] | [NextApiRequest, NextApiResponse] | []) {
  return getServerSession(...args, authConfig)
}