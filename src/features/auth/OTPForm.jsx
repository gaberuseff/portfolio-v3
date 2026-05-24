"use client";

import {useState} from "react";

import {Button} from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {Field, FieldDescription, FieldLabel} from "@/components/ui/field";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import {RefreshCwIcon} from "lucide-react";
import useVerify from "./useVerify";
import {Spinner} from "@/components/ui/spinner";

function OTPForm() {
  const {isVerifying, verify, email} = useVerify();
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const isOtpComplete = otp.length === 6;

  function handleSubmit(e) {
    e.preventDefault();
    if (!isOtpComplete) {
      setError("Please enter the 6-digit verification code.");
      return;
    }

    setError("");
    verify(otp);
  }

  return (
    <Card className="mx-auto max-w-md">
      <CardHeader>
        <CardTitle>Verify your signup</CardTitle>
        <CardDescription>
          Enter the verification code we sent to your email address:{" "}
          <span className="font-medium">{email}</span>.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form id="otp-verification-form" onSubmit={handleSubmit} noValidate>
          <Field>
            <div className="flex items-center justify-between">
              <FieldLabel htmlFor="otp-verification">
                Verification code
              </FieldLabel>
              <Button type="button" variant="outline" size="xs">
                <RefreshCwIcon />
                Resend Code
              </Button>
            </div>
            <InputOTP
              maxLength={6}
              id="otp-verification"
              value={otp}
              onChange={(value) => {
                setOtp(value);
                if (error) setError("");
              }}
              inputMode="numeric"
              autoComplete="one-time-code"
              aria-required="true"
              aria-invalid={!!error}
              required>
              <InputOTPGroup className="*:data-[slot=input-otp-slot]:h-12 *:data-[slot=input-otp-slot]:w-11 *:data-[slot=input-otp-slot]:text-xl">
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
              </InputOTPGroup>
              <InputOTPSeparator className="mx-2" />
              <InputOTPGroup className="*:data-[slot=input-otp-slot]:h-12 *:data-[slot=input-otp-slot]:w-11 *:data-[slot=input-otp-slot]:text-xl">
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
            {error && (
              <p className="mt-2 text-sm text-destructive" role="alert">
                {error}
              </p>
            )}
          </Field>
        </form>
      </CardContent>
      <CardFooter>
        <Field>
          <Button
            type="submit"
            className="w-full"
            form="otp-verification-form"
            disabled={isVerifying || !isOtpComplete}>
            Verify
            {isVerifying && <Spinner className="ml-2" />}
          </Button>
          <div className="text-sm text-muted-foreground">
            Having trouble signing in?{" "}
            <a
              href="https://wa.me/201500223440"
              target="_blank"
              className="underline underline-offset-4 transition-colors hover:text-primary">
              Contact support
            </a>
          </div>
        </Field>
      </CardFooter>
    </Card>
  );
}

export default OTPForm;
