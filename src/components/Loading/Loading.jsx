import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

export default function Loading() {
  return (
    <Stack className="loading-container">
      <Skeleton variant="text" width={1400} height={100} sx={{ fontSize: "2rem" }} />
      <Skeleton variant="rectangular" width={600} height={200} />
      <Skeleton variant="text" width={300} height={80} />
      <Skeleton variant="text" width={300} height={80} />
    </Stack>
  );
}
