
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";

export const useFormValidation = (schema, options = {}) => {
  const { toast } = useToast();
  
  const form = useForm({
    resolver: zodResolver(schema),
    ...options,
  });

  const handleSubmit = async (onSubmit, onError) => {
    return form.handleSubmit(
      async (data) => {
        try {
          await onSubmit(data);
        } catch (error) {
          if (onError) {
            onError(error);
          } else {
            toast({
              title: "Error",
              description: error.message || "Something went wrong",
              variant: "destructive",
            });
          }
        }
      }
    );
  };

  return {
    ...form,
    handleSubmit,
  };
};
