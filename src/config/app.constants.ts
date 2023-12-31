// eslint-disable-next-line @typescript-eslint/no-var-requires
const moment = require('moment');

`use strict`;

/* Validation Pattern */
export const VALIDATION_PATTERN = {
  WHOLE_NUMBER: /^[0-9]*$/,
  ALPHABETS_WITH_SPACE: /^[a-zA-Z][a-zA-Z ]*$/,
  FIELD_KEY: /^[a-zA-Z-_]*$/,
  MAPPING_FIELD_KEY: /^[a-zA-Z0-9-_ ]+$/,
  STRING_WITH_NUMBER: /^[a-zA-Z][a-zA-Z0-9]*$/,
  ALPHABETS_WITH_UNDERSCORE: /^[a-zA-Z0-9_]+$/,
};

/* Date Range Options */
export const DATE_RANGE_OPTIONS = {
  Today: [moment(), moment()],
  Yesterday: [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
  'Last 7 Days': [moment().subtract(6, 'days'), moment()],
  'Last 30 Days': [moment().subtract(29, 'days'), moment()],
  'This Month': [moment().startOf('month'), moment().endOf('month')],
  'Last Month': [
    moment().subtract(1, 'month').startOf('month'),
    moment().subtract(1, 'month').endOf('month'),
  ],
};

/* Date Picker Time Format */
export const DATE_PICKER_TIME_FORMAT = 'h:mm A';
