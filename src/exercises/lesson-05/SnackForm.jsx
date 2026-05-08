import styles from './SnackForm.module.css';
import { useEffect, useState } from 'react';

export default function SnackForm({
  addSnack,
  editingSnack,
  cancelEdit,
  updateSnack,
  className,
}) {
  const isEditing = Boolean(editingSnack);
  const [name, setName] = useState('');
  const [rating, setRating] = useState('');
  const [touched, setTouched] = useState({ name: false, rating: false });

  useEffect(() => {
    if (editingSnack) {
      setName(editingSnack.name);
      setRating(String(editingSnack.rating));
    } else {
      setName('');
      setRating('');
    }
    setTouched({ name: false, rating: false });
  }, [editingSnack]);

  function handleSubmit(e) {
    e.preventDefault();

    setTouched({ name: true, rating: true });

    if (!validateName() || !validateRating()) {
      return;
    }

    if (isEditing) {
      updateSnack(editingSnack.id, name, rating);
    } else {
      addSnack(name, rating);
      setName('');
      setRating('');
      setTouched({ name: false, rating: false });
    }
  }

  const validateName = () => name.trim().length > 0;

  const validateRating = () => rating !== '';

  const getNameError = () => {
    if (touched.name && !validateName()) {
      return 'Snack name is required!';
    }
    return null;
  };
  const getRatingError = () => {
    if (touched.rating && !validateRating()) {
      return 'Please select a rating!';
    }
    return null;
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`${styles.form} ${className || ''}`}
    >
      <h3 className={styles['form-title']}>
        {isEditing ? '✏️ Edit Snack' : '➕ Add Snack'}
      </h3>

      <div className={styles['field-container']}>
        <label className={styles['field-label']}>Name:</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onFocus={() => setTouched((prev) => ({ ...prev, name: true }))}
          className={styles['field-input']}
          placeholder="Enter snack name"
        />
        {getNameError() && <div className={styles.error}>{getNameError()}</div>}
      </div>

      <div className={styles['field-container']}>
        <label className={styles['field-label']}>Rating:</label>
        <input
          type="number"
          name="rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          onFocus={() => setTouched((prev) => ({ ...prev, rating: true }))}
          min="1"
          max="5"
          className={styles['field-input']}
          placeholder="Rate 1-5"
        />
        {getRatingError() && (
          <div className={styles.error}>{getRatingError()}</div>
        )}
      </div>

      <div className={styles['button-container']}>
        <button
          type="submit"
          className={`${styles.button} ${styles['submit-button']}`}
        >
          {isEditing ? 'Save' : 'Add'}
        </button>

        {isEditing && (
          <button
            type="button"
            onClick={cancelEdit}
            className={`${styles.button} ${styles['cancel-button']}`}
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}

// EXPLANATION:
// I converted this form from an uncontrolled form to a controlled form
// by storing the input values inside React state using useState.
//
// The name and rating inputs now use value and onChange so React fully controls
// the form data instead of relying on the DOM or FormData.
//
// The touched state tracks whether a user has interacted with each field.
// This prevents validation messages from appearing before the user interacts
// with the form fields.
//
// I used useEffect to populate the form whenever editingSnack changes.
// If a snack is being edited, the form fields are filled with existing values.
// Otherwise, the form resets back to empty values.
//
// Validation functions were added to check:
// 1.that the snack name is not empty after trimming whitespace
// 2.that a rating value has been selected
//
// Error messages are displayed inline only when:
// 1. a field has been touched
// 2. and the field is invalid
//
// handleSubmit prevents invalid submissions by checking validation before calling addSnack or updateSnack.
//
// After a successful add operation, the controlled input state resets using setName('')
// and setRating('') instead of e.target.reset().
