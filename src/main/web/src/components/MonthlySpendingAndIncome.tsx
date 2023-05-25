import { useEffect, useMemo, useState } from "react";
import {
  MonthlySpendings,
  getAllMonthlyEarnings,
  getAllMonthlyExpenses,
} from "../utils/api/get-all-monthly-expenses";
import { Table } from "./Table";
import { Grid } from "@mui/material";
import { getStartingBudget } from "../utils/api/get-starting-budget";
import { getAllExpensesInAMonth } from "../utils/api/get-expenses";

export const MonthlySpendingAndIncome: React.FC = () => {
  const [data, setData] = useState<MonthlySpendings[]>([]);
  const [earnings, setEarnings] = useState<MonthlySpendings[]>([]);
  const [startingBudgetValue, setStartingBudgetValue] = useState<number>(0);
  const [expenses, setExpenses] = useState<String[]>([]);

  const sum = data.reduce((a, b) => a + b.value, 0);
  const sumEarnings = earnings.reduce((a, b) => a + b.value, 0);

  const fetchNews = async () => {
    const res = await getAllMonthlyExpenses();
    const resEarnings = await getAllMonthlyEarnings();
    const resStartingBudget = await getStartingBudget();
    const resExpenses = await getAllExpensesInAMonth("05");
    if (res.success) {
      setData(res.data);
      setEarnings(resEarnings.data);
      setStartingBudgetValue(resStartingBudget.data)
      setExpenses(resExpenses.data)
    } else {
      console.log(res);
    }
  };

  const columns = useMemo(
    () => [
      {
        Header: "value",
        accessor: "value",
      },
      {
        Header: "description",
        accessor: "description",
      },
    ],
    []
  );

  useEffect(() => {
    fetchNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Grid container>
        {"Starting budget: " + startingBudgetValue}
        <Grid item xs={4} md={4} xl={4}>
          <Table columns={columns} data={data} />
          {"Sum of monthly spending: " + sum}
        </Grid>
        <Grid item xs={4} md={4} xl={4}>
          <Table columns={columns} data={earnings} />
          {"Sum of monthly earnings: " + sumEarnings}
        </Grid>
      </Grid>
      {JSON.stringify(expenses)}
    </div>
  );
};
