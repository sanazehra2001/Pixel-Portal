import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { Platform } from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenres";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} padding="10px" spacing={3}>
        {!data?.length &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton} children={<GameCardSkeleton />} />
          ))}

        {data.map((game) => (
          <GameCardContainer
            key={game.id}
            children={<GameCard game={game} />}
          />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
