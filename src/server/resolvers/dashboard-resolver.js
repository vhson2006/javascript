import { QueryTypes } from 'sequelize';
import { model } from '../models';
import weekQuery from '../queries/timekeeping-week-query';
import monthQuery from '../queries/timekeeping-month-query';

export const getDashboardResolver = async (parent, args, context) => {
  let query = monthQuery;
  if (args.type == 'week') {
    query = weekQuery;
  }

  const sql = query.replace('%account', context.req.user.id);
  const data = await model.sequelize.query(sql, { type: QueryTypes.SELECT });

  return data || [];
};
