"use client";
import React, { useEffect } from "react";
import DrawCard from "../DrawCard";
import { FormProvider, useForm, useWatch } from "react-hook-form";
import {
  calculateNumberOfCards,
  generateCardIndices,
} from "../../utils/cardutils";
import { usePlaced } from "../../hooks/usePlaced";

const ManualDraw = ({ filteredPlayers, registeredPlayers }) => {
  const methods = useForm();
  const { setPlacedPlayers } = usePlaced();
  const numberOfCards = calculateNumberOfCards(registeredPlayers);
  const cards = generateCardIndices(numberOfCards);
  const cardValues = methods.watch();

  useEffect(() => {
    console.log("cardValues: ", cardValues);
    setPlacedPlayers(cardValues);
    // Update placed hook when specific properties change
  }, [
    cardValues["match-1-dropdown1"],
    cardValues["match-1-dropdown2"],
    cardValues["match-2-dropdown1"],
    cardValues["match-2-dropdown2"],
    cardValues["match-3-dropdown1"],
    cardValues["match-3-dropdown2"],
    cardValues["match-4-dropdown1"],
    cardValues["match-4-dropdown2"],
  ]);
  return (
    <div>
      <FormProvider {...methods}>
        <div>
          {cards.map((cardNumber) => {
            return (
              <DrawCard
                showDefaultOption={true}
                // key={`card-${cardNumber}`}
                key={cardNumber}
                id={cardNumber}
                playerOptions={filteredPlayers}
              />
            );
          })}
        </div>
      </FormProvider>
    </div>
  );
};

export default ManualDraw;
