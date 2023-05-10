import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <>
      <Card width="360px" borderRadius={10} overflow={"hidden"}>
        <Skeleton height="268px" />
        <CardBody>
          <SkeletonText />
        </CardBody>
      </Card>
    </>
  );
};

export default GameCardSkeleton;
