import React, { useState } from "react";

const DEFAULT_DATA = {
  title: "",
  description: "",
  link: "",
  priority: "1",
  timeToFinish: 60,
};

const ResourceForm = ({ onFormSubmit, initialData, title }) => {
  const [form, setForm] = useState(initialData || DEFAULT_DATA);

  const resetForm = () => setForm(DEFAULT_DATA);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const submitForm = () => {
    onFormSubmit(form);
  };

  return (
    <>
      <h1 className="title">{title}</h1>
      <form>
        {/* Field 1 */}
        <div className="field">
          <label className="label">Title</label>
          <div className="control">
            <input
              value={form.title}
              onChange={handleInputChange}
              name="title"
              className="input"
              type="text"
              placeholder="Lean Next JS and Sanity IO"
            />
          </div>
        </div>
        {/* Field 2 */}
        <div className="field">
          <label className="label">Description</label>
          <div className="control">
            <textarea
              value={form.description}
              onChange={handleInputChange}
              name="description"
              className="textarea"
              placeholder="Learn these technologies because they are very popular and enabled better SEO"
            ></textarea>
          </div>
        </div>
        {/* Field 3 */}
        <div className="field">
          <label className="label">Link</label>
          <div className="control">
            <input
              value={form.link}
              onChange={handleInputChange}
              name="link"
              className="input"
              type="text"
              placeholder="https://academy.eincode.com"
            />
          </div>
        </div>
        {/* Field 4 */}
        <div className="field">
          <label className="label">Priority</label>
          <div className="control">
            <div className="select">
              <select
                value={form.priority}
                onChange={handleInputChange}
                name="priority"
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </div>
          </div>
        </div>
        {/* Field 5 */}
        <div className="field">
          <label className="label">Time to finish</label>
          <div className="control">
            <input
              value={form.timeToFinish}
              onChange={handleInputChange}
              name="timeToFinish"
              className="input"
              type="number"
              placeholder="60"
            />
          </div>
          <p class="help">Time is in minutes</p>
        </div>
        {/* Buttons */}
        <div className="field is-grouped">
          <div className="control">
            <button
              type="button"
              onClick={submitForm}
              className="button is-link"
            >
              Submit
            </button>
          </div>
          <div className="control">
            <button
              type="button"
              onClick={resetForm}
              className="button is-link is-light"
            >
              Reset Form
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default ResourceForm;
