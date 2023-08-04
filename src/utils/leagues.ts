/*

Leagues are tiered using a binary tree structure. 

Tier 1 contains League 1
Tier 2 contais Leagues 2-3
Tier 3 contains Leagues 4-7

etc.

*/
export const getTierFromLeague = (leagueId: number) =>
  Math.ceil(Math.log2(leagueId)) + 1;
