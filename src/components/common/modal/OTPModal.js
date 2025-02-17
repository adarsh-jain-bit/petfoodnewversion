"use client";
import React, { useState, useEffect } from "react";
import OtpInput from "react-otp-input";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Image from "next/image";
import { OTPWrapper } from "./OTP.style";
import LoadingButton from "@mui/lab/LoadingButton";
import SaveIcon from "@mui/icons-material/Save";
import { Box, Typography } from "@mui/material";
import { COLORS } from "@src/lib/constants/colors";
import { auth } from "../../../utiles/firebase.config";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { Stack } from "@mui/system";
import { toast } from "react-toastify";
import { useRouter } from 'next/navigation';

export default function OTPButton({ value }) {
  console.log(value)
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [open, setOpen] = useState(false);
  const [loading , setLoading] = useState(false)
  const [otp, setOtp] = useState("");
  // const [phone, setPhone] = useState(value);
  const [confirmationResult, setConfirmationResult] = useState("");
  const router = useRouter();
  useEffect(() => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      auth,
      "recaptcha-container",
      {
        size: "invisible",
        callback: (response) => {
          console.log(response);
        },
        "expired-callback": () => {
          console.log("Recaptcha expired, please try again.");
        },
      }
    );
    return () => {
      window.recaptchaVerifier.clear();
    };
  }, []);

  const onSignUp = async () => {
    setOpen(true);
    setLoading(true)
    try {
      const phoneNumber = await value.replace(/\s/g, "");
      console.log(phoneNumber);
      const appVerifier = window.recaptchaVerifier;
       let confirmation = await signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      toast.success("OTP Successfully Sent!", {
        position: "bottom-left",
      });
      setConfirmationResult(confirmation);
    } catch (error) {
      toast.error("Error Occurs", {
        position: "bottom-left",
        
      });
      setOpen(false)
      setLoading(false)
      console.log(error);
    }
  };

  const verifyOTP = async () => {
    try {
      await confirmationResult.confirm(otp);
      toast.success("OTP Verified!", {
        position: "bottom-left",
      });
      setLoading(false)
      setOtp("");
      setOpen(false)
      router.push("/")
    } catch (error) {
      toast.error("OTP not Verified!", {
        position: "bottom-left",
      });
      setLoading(false)
      console.log(error);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };
const resetOtp = () => {
 setOtp("")
}
  return (
    <React.Fragment>
      <button className="button" onClick={onSignUp}>
        Request OTP
      </button>
      <div id="recaptcha-container"></div>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <OTPWrapper>
          <DialogContent>
            <Box className="box">
              <Typography variant="h3" className="otp-heading">
                We will send you an OTP to your Mobile Number
              </Typography>
              <Image
                src="/assets/otp-img.png"
                alt="otp"
                height="100"
                width="100"
                className="otp-image"
              />
              <OtpInput
                value={otp}
                onChange={setOtp}
                numInputs={6}
                renderSeparator={<span className="otp-gap"></span>}
                renderInput={(props) => (
                  <input {...props} className="otp-box" />
                )}
              />
            <Stack className="button-wrapper" >
            <Button variant="outlined" className="resetbutton" onClick={resetOtp}>Reset</Button>
              <LoadingButton
                loading={false}
                loadingPosition="start"
                startIcon={ false &&<SaveIcon />}
                variant="outlined"
                onClick={verifyOTP}
                className="otpsendbutton"
              >
                Verify OTP
              </LoadingButton>
            </Stack>
            </Box>
          </DialogContent>
        </OTPWrapper>
      </Dialog>
    </React.Fragment>
  );
}
