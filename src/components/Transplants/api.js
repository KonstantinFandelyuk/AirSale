export const transplantsInitialState = {
    transplantAll: {
      value: "all",
      label: "Все",
      checked: true,
    },
    transplant0: {
      value: 0,
      label: "Без пересадок",
      checked: true,
    },
    transplant1: {
      value: 1,
      label: "1 пересадка",
      checked: true,
    },
    transplant2: {
      value: 2,
      label: "2 пересадки",
      checked: true,
    },
    transplant3: {
      value: 3,
      label: "3 пересадки",
      checked: true,
    },
};

export const transplantPositions = Object.keys(transplantsInitialState);

export function getTransplants(transplants) {
    return transplantPositions.reduce((result, transplantName) => {
      if (transplantName !== "transplantAll" && transplants[transplantName].checked) {
        result.push(transplants[transplantName].value);
      }
  
      return result;
    }, []);
}
