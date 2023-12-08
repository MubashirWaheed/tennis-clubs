import React from "react";
import DrawCard from "./DrawCard";
import { FormProvider, useForm } from "react-hook-form";

// will extract all this logic at the end fro each type of draw
const DrawCardGrid = ({ selectedDraw, playerDraw, registeredPlayers }) => {
  const methods = useForm();

  const numberOfCards = Math.ceil(registeredPlayers.length / 2);
  const cards = Array.from({ length: numberOfCards }, (_, index) => index + 1);

  const groupPlayersIntoPairs = (players) => {
    const pairs = [];
    for (let i = 0; i < players.length; i += 2) {
      const pair = [players[i], players[i + 1]];
      pairs.push(pair);
    }
    return pairs;
  };
  let playerPairs;
  // Group registered players into pairs
  if (playerDraw) {
    playerPairs = groupPlayersIntoPairs(playerDraw);
  }

  return (
    <>
      <FormProvider {...methods}>
        {/* Column 1 */}
        <div className="grow max-w-[33.3%] basis-1/3 bg-[#FAFBFF]">
          <div className="flex flex-col text-center my-[10px]">
            <p className="text-grey fw700 underline lh24">Set Location</p>
            <p className="text-grey fw700 underline lh24">Set Date & Time</p>
          </div>

          {/* Number of cards will depend on the type of draw */}
          {selectedDraw.drawType !== "Compass" ? (
            <div>
              <DrawCard id="playername1" />
            </div>
          ) : (
            <>
              {playerPairs ? (
                <div>
                  {playerPairs?.map((pair, index) => {
                    return (
                      <DrawCard
                        showDefaultOption={false}
                        key={index}
                        id={`playername${index + 2}`}
                        playerOptions={pair}
                      />
                    );
                  })}
                </div>
              ) : (
                // Number of cards should be half the size of player in case of compass draw
                // if eight players than 4 cards needs to be created
                // if 16 players coming in the registerd players than 8 cards needs to be created

                <div>
                  {cards.map((cardNumber) => (
                    <DrawCard
                      showDefaultOption={true}
                      key={`card-${cardNumber}`}
                      id={`playername${cardNumber + 1}`}
                      playerOptions={registeredPlayers}
                    />
                  ))}
                </div>

                // <DrawCard id="playername1" playerOptions={registeredPlayers} />
              )}
            </>
          )}
        </div>

        {/* Column 2 */}
        {/* <div className="grow basis-1/3 bg-[#FAFBFF]">
          <div className="flex flex-col text-center my-[10px]">
            <p className="text-grey fw700 underline lh24">Set Location</p>
            <p className="text-grey fw700 underline lh24">Set Date & Time</p>
          </div>
          <div>
            <DrawCard id="playername3" />
            <DrawCard id="playername4" />
          </div>
        </div> */}
      </FormProvider>
    </>
  );
};

export default DrawCardGrid;
