import { useEffect, useMemo, useState } from "react";
import {
  MonthlySpendings,
  getAllMonthlyExpenses,
} from "../utils/api/get-all-monthly-expenses";
import { Table } from "./Table";
import { Grid } from "@mui/material";

export const FixedMonthlyExpenses: React.FC = () => {
  const [data, setData] = useState<MonthlySpendings[]>([]);

  const sum = data.reduce((a, b) => a + b.value, 0);

  const fetchNews = async () => {
    const res = await getAllMonthlyExpenses();
    if (res.success) {
      setData(res.data);
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
        <Grid item xs={4} md={4} xl={4}>
          <Table columns={columns} data={data} />
          {"Sum of Fixed monthly spending: " + sum}
        </Grid>
      </Grid>
    </div>
  );
};
