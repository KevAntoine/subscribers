import {
  Input,
  FormControl,
  FormLabel,
  FormHelperText,
  Checkbox,
  Button,
  Text,
} from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { State } from "./types";
const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors },
  } = useForm<State>();
  const onSubmit: SubmitHandler<State> = (data) => console.log(data);

  console.log(watch("email"));
  return (
    <FormControl onSubmit={handleSubmit(onSubmit)} id="email">
      <Box m="1rem">
        <FormLabel>Full Name</FormLabel>
        <Input
          type="text"
          placeholder="Enter Full Name"
          {...register("name")}
        />
      </Box>
      <Box m="1rem">
        <FormLabel>Email address</FormLabel>
        <Input
          type="email"
          placeholder="your Email adress"
          {...register("email", { required: true })}
        />
      </Box>
      <Box m="1rem">
        <FormLabel>Email address</FormLabel>
        <Input
          type="email"
          placeholder="confirm your Email "
          {...register("confirmEmail", {
            required: true,
            validate: () => getValues("email") === getValues("confirmEmail"),
          })}
        />
      </Box>
      <Box m="1rem">
        <FormLabel>whatsApp Number</FormLabel>
        <Input
          type="tel"
          placeholder="{country code} {prefix} {number}"
          {...register("phone", {
            required: true,
            maxLength: 12,
            pattern: /[0-9]{4} [0-9]{2} [0-9]{6}/,
          })}
        />
      </Box>
      {errors.email && (
        <FormHelperText>We'll never share your email.</FormHelperText>
      )}
      {errors.confirmEmail && (
        <FormHelperText>Emails dont match!</FormHelperText>
      )}
      {errors.phone && <FormHelperText>Enter Valid number</FormHelperText>}
      <Checkbox p="2rem">
        <Text textAlign="left">Yes, I want to be informed about news.</Text>
      </Checkbox>

      <Button type="submit"> Pre-Register</Button>
    </FormControl>
  );
};

export default Form;
