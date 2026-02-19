import { useMemo, useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  TextField,
} from "@mui/material";

import type { UserRow } from "../../constants";

type AddUserModalProps = {
  open: boolean;
  onClose: () => void;
  onAddUser: (newUser: UserRow) => void;
};

type FormValues = {
  name: string;
  email: string;
  phone: string;
  assignedGames: string; 
};

type FormErrors = {
  name?: string;
  email?: string;
  phone?: string;
  assignedGames?: string;
};

const initialForm: FormValues = {
  name: "",
  email: "",
  phone: "",
  assignedGames: "",
};

const AddUserModal = ({ open, onClose, onAddUser }: AddUserModalProps) => {
  const [form, setForm] = useState<FormValues>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});

  const isSaveDisabled = useMemo(() => {
    return (
      !form.name.trim() ||
      !form.email.trim() ||
      !form.phone.trim() ||
      !form.assignedGames.trim()
    );
  }, [form]);

  const handleChange = (key: keyof FormValues, value: string) => {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [key]: undefined,
    }));
  };

  const validate = (data: FormValues) => {
    const newErrors: FormErrors = {};

    if (!data.name.trim()) newErrors.name = "Name is required";
    if (!data.email.trim()) newErrors.email = "Email is required";
    if (!data.phone.trim()) newErrors.phone = "Phone is required";

    if (data.email && !data.email.includes("@")) {
      newErrors.email = "Enter a valid email";
    }

    if (data.phone && data.phone.trim().length < 10) {
      newErrors.phone = "Phone must be at least 10 digits";
    }

    if (!data.assignedGames.trim()) {
      newErrors.assignedGames = "Assigned games are required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleClose = () => {
    onClose();
    setForm(initialForm);
    setErrors({});
  };

  const handleSubmit = () => {
    const isValid = validate(form);
    if (!isValid) return;

    const assignedGamesArray = form.assignedGames
      .split(",")
      .map((g) => g.trim())
      .filter(Boolean)
      .map((gameName) => ({ gameName }));

    const newUser: UserRow = {
      name: form.name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      assignedGames: assignedGamesArray,
    };

    onAddUser(newUser);
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
      <DialogTitle>Add User</DialogTitle>

      <DialogContent>
        <Stack spacing={2} sx={{ mt: 1 }}>
          <TextField
            label="Name"
            value={form.name}
            onChange={(e) => handleChange("name", e.target.value)}
            error={Boolean(errors.name)}
            helperText={errors.name}
            fullWidth
          />

          <TextField
            label="Email"
            value={form.email}
            onChange={(e) => handleChange("email", e.target.value)}
            error={Boolean(errors.email)}
            helperText={errors.email}
            fullWidth
          />

          <TextField
            label="Phone"
            value={form.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            error={Boolean(errors.phone)}
            helperText={errors.phone}
            fullWidth
          />

          <TextField
            label="Assigned Games "
            value={form.assignedGames}
            onChange={(e) => handleChange("assignedGames", e.target.value)}
            error={Boolean(errors.assignedGames)}
            helperText={errors.assignedGames}
            placeholder="Call of Duty, FIFA 24"
            fullWidth
          />
        </Stack>
      </DialogContent>

      <DialogActions sx={{ px: 3, pb: 2 }}>
        <Button variant="text" onClick={handleClose}>
          Cancel
        </Button>

        <Button
          variant="contained"
          onClick={handleSubmit}
          disabled={isSaveDisabled}
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddUserModal;
