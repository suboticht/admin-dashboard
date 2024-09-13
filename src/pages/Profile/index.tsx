import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { TextField, Button, Box } from '@mui/material';
import { schema } from '../../schema';
import TitleHeader from '../../components/TitleHeader';

const Profile = () => {
  const { control, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  const onSubmit = (data: FormData) => {
    console.log(data);
  };
  return (
    <Box 
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2
      }}
    >
      {/* Page name */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <TitleHeader name="CREATE USER" text="Create a New User Profile" />
      </Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box sx={{ display: "flex", justifyContent: "space-between", gap: 2, marginBottom: "1rem" }}>
          <Controller
            name="firstName"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="First Name"
                variant="outlined"
                error={!!errors.firstName}
                helperText={errors.firstName?.message}
                sx={{ flex: 1 }}
              />
            )}
          />
          <Controller
            name="lastName"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Last Name"
                variant="outlined"
                error={!!errors.lastName}
                helperText={errors.lastName?.message}
                sx={{ flex: 1 }}
              />
            )}
          />
        </Box>
        <Box sx={{ marginBottom: "1rem" }}>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Email"
                variant="outlined"
                fullWidth
                error={!!errors.email}
                helperText={errors.email?.message}
              />
            )}
          />
        </Box>
        <Box sx={{ marginBottom: "1rem" }}>
          <Controller
            name="age"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Age"
                type="number"
                variant="outlined"
                fullWidth
                error={!!errors.age}
                helperText={errors.age?.message}
              />
            )}
          />
        </Box>
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </Box>
  )
}

export default Profile