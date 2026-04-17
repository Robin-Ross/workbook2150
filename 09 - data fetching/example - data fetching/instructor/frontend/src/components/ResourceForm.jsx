import { useState } from 'react';

import { Form, useNavigate } from 'react-router';

export default function ResourceForm({
  initialData,
  isEditing,
  isSubmitting
}) {
  const [formData, setFormData] = useState(initialData);
  const navigate = useNavigate();

  function handleChange(e) {
    // handle form field input changes
    // we'll write one generic function that can address all input types
  }

  return (
    <Form method="post" className="space-y-4">
    </Form>
  );
}