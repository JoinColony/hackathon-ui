/*

Leagues are tiered using a binary tree structure. 

Tier 1 contains League 1
Tier 2 contais Leagues 2-3
Tier 3 contains Leagues 4-7

etc.

The logarithm base 2 will convert the league id into the tier it belongs to.
We need to floor this to the tier as an integer, and then add one since tiers start at 1.

*/
export const getTierFromLeague = (leagueId: number) =>
  Math.floor(Math.log2(leagueId)) + 1;
