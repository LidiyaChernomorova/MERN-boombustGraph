export const ACTION_TYPES = {
    META: {
      START: "data: get table data start",
      SUCCESS: "data: get table data success",
      FAILED: "data: get table data failed",
    },
    COMPANY: {
      START: "data: get data for company start",
      SUCCESS: "data: get data for company success",
      FAILED: "data: get data for company fail",
      NAME: "data: selected company name",
    },
    COMPARE_COMPANY: {
      START: "data:  get data for company compare start",
      SUCCESS: "data:  get data for company compare success",
      FAILED: "data:  get data for company compare fail",
      NAME: "data: selected company to compare name and value for input <compare>",
    },
    INPUT: {
      FROM: "data: value for input <from>",
      TO: "data: value for input <to>",
    },
    NOTE: {
      START: "data: get note start",
      SUCCESS: "data: get note success",
      FAILED: "data: get note failed",
    }
};
