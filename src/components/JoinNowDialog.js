
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
  MenuItem,
  Stack,
  Box,
  Snackbar,
  Alert,
} from "@mui/material";
import { useEffect, useMemo, useState } from "react";

export default function JoinNowDialog({ open, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    district: "",
    course: "",
  });

  const [touched, setTouched] = useState({
    name: false,
    phone: false,
    email: false,
    district: false,
    course: false,
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);


  const validators = {
    name: (v) => (v.trim() ? "" : "Full name is required"),
    phone: (v) => (/^[0-9]{10}$/.test(v) ? "" : "Enter a valid 10-digit phone"),
    email: (v) => (/\S+@\S+\.\S+/.test(v) ? "" : "Enter a valid email"),
    district: (v) => (v.trim() ? "" : "District is required"),
    course: (v) => (v ? "" : "Select a course"),
  };

  const validateAll = (data) => {
    const next = {};
    Object.keys(validators).forEach((key) => {
      next[key] = validators[key](data[key]);
    });
    return next;
  };

 
  useEffect(() => {
    setErrors(validateAll(formData));
  }, [formData]);

  const isValid = useMemo(
    () => Object.values(errors).every((e) => e === ""),
    [errors]
  );

  // controlled inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

 
  const handleSubmit = async (e) => {
  e.preventDefault();
  setTouched({ name: true, phone: true, email: true, district: true, course: true });

  if (!isValid) return;

  setSubmitting(true);
  try {
    console.log("[JoinNow] Sending to Formspree…", formData);
    const res = await fetch("https://formspree.io/f/mqayjpjg", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        _subject: "New Join Request - IT Saksham Yuva",
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        district: formData.district,
        course: formData.course,
        source: "IT Saksham Yuva Join Form",
      }),
    });

    console.log("[JoinNow] Response status:", res.status);
    if (!res.ok) {
      const text = await res.text().catch(() => "");
      throw new Error(`Formspree error: ${res.status} ${text}`);
    }

   
    setShowSuccess(true);
    onClose?.();
    setFormData({ name: "", phone: "", email: "", district: "", course: "" });
    setTouched({ name: false, phone: false, email: false, district: false, course: false });
  } catch (err) {
    console.error("❌ Email send failed:", err);
    alert("There was a problem submitting your form. Please try again.");
  } finally {
    setSubmitting(false);
  }
};


  return (
    <>
      <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
        <DialogTitle sx={{ textAlign: "center", fontWeight: 700 }}>
          Join Now
        </DialogTitle>

        <DialogContent>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <Stack spacing={2}>
             
              <input type="text" name="_gotcha" style={{ display: "none" }} onChange={() => {}} />

              <TextField
                label="Your Full Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.name && !!errors.name}
                helperText={touched.name ? errors.name : " "}
                fullWidth
              />

              <TextField
                label="Your Phone Number"
                name="phone"
                value={formData.phone}
                onChange={(e) => {
                  
                  const v = e.target.value.replace(/\D/g, "").slice(0, 10);
                  setFormData((p) => ({ ...p, phone: v }));
                }}
                onBlur={handleBlur}
                error={touched.phone && !!errors.phone}
                helperText={touched.phone ? errors.phone : " "}
                fullWidth
                inputProps={{ inputMode: "numeric", maxLength: 10 }}
              />

              <TextField
                label="Your Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.email && !!errors.email}
                helperText={touched.email ? errors.email : " "}
                fullWidth
              />

              <TextField
                label="Your District"
                name="district"
                value={formData.district}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.district && !!errors.district}
                helperText={touched.district ? errors.district : " "}
                fullWidth
              />

              <TextField
                select
                label="Course"
                name="course"
                value={formData.course}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.course && !!errors.course}
                helperText={touched.course ? errors.course : " "}
                fullWidth
                SelectProps={{
                  MenuProps: { PaperProps: { sx: { borderRadius: 1, mt: 0.5 } } },
                }}
                sx={{
                  "& .MuiInputBase-root": {
                    height: "56px",
                    display: "flex",
                    alignItems: "center",
                  },
                }}
              >
                <MenuItem value="Server Administration Microsoft/ Linux">
                  Server Administration Microsoft/ Linux
                </MenuItem>
                <MenuItem value="Web And Mobile Application Development">
                  Web And Mobile Application Development
                </MenuItem>
                <MenuItem value="Digital Marketing & Social Media Handling">
                  Digital Marketing & Social Media Handling
                </MenuItem>
                <MenuItem value="Emerging Technologies">Emerging Technologies</MenuItem>
                <MenuItem value="Secure Coding in Java, DotNet, PHP">
                  Secure Coding in Java, DotNet, PHP
                </MenuItem>
                <MenuItem value="DBA in SQL, PostgreSQL">DBA in SQL, PostgreSQL</MenuItem>
                <MenuItem value="UI/UX Design, Web Design">UI/UX Design, Web Design</MenuItem>
                <MenuItem value="Networking – Network Support, LAN/ WAN">
                  Networking – Network Support, LAN/ WAN
                </MenuItem>
              </TextField>

              <Button
                type="submit"
                variant="contained"
                fullWidth
                disabled={!isValid || submitting}
                sx={{
                  mt: 1,
                  backgroundColor: "#f57c00",
                  color: "#fff",
                  fontWeight: 600,
                  py: 1.2,
                  borderRadius: 3,
                  textTransform: "none",
                  "&:hover": { backgroundColor: "#e86b00" },
                }}
              >
                {submitting ? "Submitting..." : "Submit Now"}
              </Button>
            </Stack>
          </Box>
        </DialogContent>
      </Dialog>

      <Snackbar
        open={showSuccess}
        autoHideDuration={3000}
        onClose={() => setShowSuccess(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert severity="success" variant="filled" sx={{ width: "100%" }}>
          Your details have been submitted successfully!
        </Alert>
      </Snackbar>
    </>
  );
}
