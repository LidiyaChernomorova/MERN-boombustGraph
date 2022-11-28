export const ACTION_TYPES = {
    META: {
      START: "data: get tableDataStart",
      SUCCESS: "data: get tableDataSuccess",
      FAILED: "data: get tableDataFailed",
    },
    COMPANY: {
      START: "data: get companyDataStart",
      SUCCESS: "data: get companyDataSuccess",
      FAILED: "data: get companyDataFailed",
      NAME: "data: selected company name",
      FROM: "data: value for input <from>",
      TO: "data: value for input <to>",
      COMPARE_NAME: "data: value for input <compare>",
    },
    NOTE: {
      START: "data: get noteStart",
      SUCCESS: "data: get noteSuccess",
      FAILED: "data: get noteFailed",
    }
};
