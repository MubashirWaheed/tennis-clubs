"use client";
import React from "react";
import DrawCard from "../DrawCard";
import { FormProvider, useForm } from "react-hook-form";
import {
  calculateNumberOfCards,
  generateCardIndices,
} from "../../utils/cardutils";

const ManualDraw = ({ registeredPlayers }) => {
  const methods = useForm();

  const numberOfCards = calculateNumberOfCards(registeredPlayers);
  const cards = generateCardIndices(numberOfCards);
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
                playerOptions={registeredPlayers}
              />
            );
          })}
        </div>
      </FormProvider>
    </div>
  );
};

export default ManualDraw;
