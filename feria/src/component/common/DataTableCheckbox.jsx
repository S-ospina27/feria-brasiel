import React, { useState } from "react";
import { Button, Box, styled } from "@mui/material";
import {
  DataGrid,
  GridToolbarFilterButton,
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarDensitySelector,
} from "@mui/x-data-grid";
import CachedIcon from "@mui/icons-material/Cached";
import ScheduleIcon from "@mui/icons-material/Schedule";

const StyledGridOverlay = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  "& .ant-empty-img-1": {
    fill: theme.palette.mode === "light" ? "#aeb8c2" : "#262626",
  },
  "& .ant-empty-img-2": {
    fill: theme.palette.mode === "light" ? "#f5f5f7" : "#595959",
  },
  "& .ant-empty-img-3": {
    fill: theme.palette.mode === "light" ? "#dce0e6" : "#434343",
  },
  "& .ant-empty-img-4": {
    fill: theme.palette.mode === "light" ? "#fff" : "#1c1c1c",
  },
  "& .ant-empty-img-5": {
    fillOpacity: theme.palette.mode === "light" ? "0.8" : "0.08",
    fill: theme.palette.mode === "light" ? "#f5f5f5" : "#fff",
  },
}));

export function CustomNoRowsOverlay() {
  return (
    <StyledGridOverlay>
      {/* Tu SVG aquí */}
      <Box sx={{ mt: 1 }}>No hay registros</Box>
    </StyledGridOverlay>
  );
}

function DataTableCheckbox({
  setValue,
  rows,
  columns,
  getRowId,
  sx,
  onRowClick,
  reload,
  toolbar,
}) {
  const [pagesize, setPageSize] = useState(10);
  const [disabled, setDisabled] = useState(false);

  const handleReload = () => {
    reload();
    setDisabled(true);
    setTimeout(() => setDisabled(false), 5000);
  };

  const DefaultButtons = () => {
    if (reload) {
      return (
        <Button
          disabled={disabled}
          size="small"
          onClick={handleReload}
          sx={{color:"#252b59"}}
          startIcon={
            disabled ? (
              <ScheduleIcon color="warning" />
            ) : (
              <CachedIcon sx={{color:" #252b59"}}/>
            )
          }
        >
          {"Recargar"}
        </Button>
      );
    }

    return null;
  };

  return (
    <DataGrid
      onRowSelectionModelChange={(items) => setValue(items)}
      checkboxSelection
      disableRowSelectionOnClick
      experimentalFeatures={{ newEditingApi: true }}
      disableColumnMenu
      density="compact"
      rows={!rows.status ? rows : []}
      columns={columns}
      getRowId={(row) => row[getRowId]}
      sx={sx}
      pagination
      pageSize={pagesize}
      onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
      rowsPerPageOptions={[10, 25, 50, 100]}
      onRowClick={(params) => {
        if (onRowClick) {
          if (![null, undefined].includes(onRowClick.set)) {
            onRowClick.set(params.row);
          }

          if (![null, undefined].includes(onRowClick.open)) {
            onRowClick.open(true);
          }
        }
      }}
      components={{
        Toolbar: () => (
          <GridToolbarContainer>
            <GridToolbarColumnsButton sx={{ color: "#252b59" }} />
            <GridToolbarFilterButton sx={{ color: "#252b59" }} />
            <GridToolbarDensitySelector sx={{ color:"#252b59" }} />
            <DefaultButtons />
            {toolbar}
          </GridToolbarContainer>
        ),
        NoRowsOverlay: CustomNoRowsOverlay,
      }}
    />
  );
}

export default DataTableCheckbox;
