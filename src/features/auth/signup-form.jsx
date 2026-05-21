"use client";

import {useForm} from "react-hook-form";

import {Button} from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldError,
} from "@/components/ui/field";
import {Input} from "@/components/ui/input";
import {Spinner} from "@/components/ui/spinner";
import {arab_countries} from "@/lib/constants";
import {cn} from "@/lib/utils";
import useSignup from "./useSignup";

export function SignupForm({className, ...props}) {
  const {signup, isSigningUp} = useSignup();
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm({
    mode: "onTouched",
    defaultValues: {
      name: "",
      email: "",
      phoneNumber: "",
      country: "",
      password: "",
      confirmPassword: "",
    },
  });

  function onSubmit(values) {
    const {confirmPassword, ...payload} = values;
    signup(payload);
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Create your account</CardTitle>
          <CardDescription>
            Enter your email below to create your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <FieldGroup>
              <Field className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-end">
                <Field>
                  <FieldLabel htmlFor="name">Full Name</FieldLabel>
                  <Input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    autoComplete="name"
                    aria-invalid={!!errors.name}
                    {...register("name", {
                      required: "Full name is required.",
                      minLength: {
                        value: 2,
                        message: "Full name must be at least 2 characters.",
                      },
                    })}
                  />
                  <FieldError>{errors.name?.message}</FieldError>
                </Field>
                <Field>
                  <FieldLabel htmlFor="email">Email</FieldLabel>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    autoComplete="email"
                    aria-invalid={!!errors.email}
                    {...register("email", {
                      required: "Email is required.",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Enter a valid email address.",
                      },
                    })}
                  />
                  <FieldError>{errors.email?.message}</FieldError>
                </Field>
              </Field>

              <Field className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-end">
                <Field>
                  <FieldLabel htmlFor="phone">Phone Number</FieldLabel>
                  <Input
                    id="phoneNumber"
                    type="tel"
                    placeholder="123-456-7890"
                    autoComplete="tel"
                    aria-invalid={!!errors.phoneNumber}
                    {...register("phoneNumber", {
                      required: "Phone number is required.",
                      minLength: {
                        value: 7,
                        message: "Phone number is too short.",
                      },
                    })}
                  />
                  <FieldError>{errors.phoneNumber?.message}</FieldError>
                </Field>

                <Field>
                  <FieldLabel htmlFor="country">Country</FieldLabel>
                  <Combobox
                    items={arab_countries.filter(
                      (country) => country.code !== "",
                    )}
                    itemToStringValue={(country) => country.name}>
                    <ComboboxInput
                      id="country"
                      name="country"
                      placeholder="Search countries..."
                      aria-invalid={!!errors.country}
                    />
                    <ComboboxContent>
                      <ComboboxEmpty>No countries found.</ComboboxEmpty>
                      <ComboboxList>
                        {(country) => (
                          <ComboboxItem key={country.code} value={country.name}>
                            {country.name}
                          </ComboboxItem>
                        )}
                      </ComboboxList>
                    </ComboboxContent>
                  </Combobox>
                  <FieldError>{errors.country?.message}</FieldError>
                </Field>
              </Field>

              <Field>
                <Field className="grid grid-cols-2 gap-4">
                  <Field>
                    <FieldLabel htmlFor="password">Password</FieldLabel>
                    <Input
                      id="password"
                      type="password"
                      autoComplete="new-password"
                      aria-invalid={!!errors.password}
                      {...register("password", {
                        required: "Password is required.",
                        minLength: {
                          value: 8,
                          message: "Password must be at least 8 characters.",
                        },
                      })}
                    />
                    <FieldError>{errors.password?.message}</FieldError>
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="confirmPassword">
                      Confirm Password
                    </FieldLabel>
                    <Input
                      id="confirmPassword"
                      type="password"
                      autoComplete="new-password"
                      aria-invalid={!!errors.confirmPassword}
                      {...register("confirmPassword", {
                        required: "Please confirm your password.",
                        validate: (value, formValues) =>
                          value === formValues.password ||
                          "Passwords do not match.",
                      })}
                    />
                    <FieldError>{errors.confirmPassword?.message}</FieldError>
                  </Field>
                </Field>
                <FieldDescription>
                  Must be at least 8 characters long.
                </FieldDescription>
              </Field>
              <Field>
                <Button type="submit" disabled={isSigningUp}>
                  Create Account
                  {isSigningUp && <Spinner />}
                </Button>
                <FieldDescription className="text-center">
                  Already have an account? <a href="#">Sign in</a>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
