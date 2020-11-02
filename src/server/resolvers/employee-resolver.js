import { model } from '../models';

export const getEmployeesResolver = async (parent, args, context) => {
  const employees = await model.employee.findAll({
    where: {
      accountId: context.req.user.id,
    },
  });

  return employees || [];
};
