import moment from 'moment';

export function getDates(startDate: moment.MomentInput, endDate: moment.MomentInput) {
  let dateArray: Date[] = [];
  let fromDate = moment(startDate);
  let toDate = moment(endDate);
  while (fromDate <= toDate) {
    dateArray.push(moment(fromDate).toDate());
    fromDate = moment(fromDate).add(1, 'days');
  }
  return dateArray;
}
