import { useEffect, useMemo, useState } from "react";
import {
  MonthlySpendings,
  getAllMonthlyEarnings,
} from "../utils/api/get-all-monthly-expenses";
import { Table } from "./Table";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
} from "@mui/material";
import { env } from "process";
import { deleteExpense } from "../utils/api/delete-expense";

export const FixedMonthlyEarnings: React.FC = () => {
  const [earnings, setEarnings] = useState<MonthlySpendings[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  const sumEarnings = earnings.reduce((a, b) => a + b.value, 0);

  const fetchNews = async () => {
    const resEarnings = await getAllMonthlyEarnings();
    if (resEarnings.success) {
      setEarnings(resEarnings.data);
    } else {
      console.log(resEarnings);
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
      {
        Header: "Actions",
        accessor: (expense: any) => (
          <Button
            onClick={() => handleClick(expense.id)}
            variant="outlined"
            sx={{ color: "white" }}
          >
            Delete earning
          </Button>
        ),
      },
    ],
    []
  );

  useEffect(() => {
    fetchNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = (i: number) => {
    deleteExpense(i);
  };

  return (
    <Grid container>
      <Grid item xs={4} md={4} xl={4} />
      <Grid item xs={6} md={6} xl={6}>
        <h2>Fixed Monthly Earnings</h2>
      </Grid>
      <Grid item xs={4} md={4} xl={4} />
      <Grid item xs={6} md={6} xl={6}>
        <Table columns={columns} data={earnings} />
        {"Sum of Fixed monthly earnings: " + sumEarnings}
        {}
      </Grid>

      {/* <Dialog open={isDialogOpen} onClose={() => setIsDialogOpen(false)}>
        <DialogTitle>Do you want to add a new monthly expense?</DialogTitle>
        <DialogContent>{content}</DialogContent>
        <DialogActions>
          {actions.map((action, index) => (
            <Button key={index} onClick={action.onClick} color={action.color}>
              {action.label}
            </Button>
          ))}
        </DialogActions>
      </Dialog> */}
      {/* {process.env.} */}
    </Grid>
  );
};
