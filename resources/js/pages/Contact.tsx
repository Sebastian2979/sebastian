import React from "react";
import { useForm, usePage } from "@inertiajs/react";

type PageProps = {
  flash?: { success?: string; error?: string };
  errors?: Record<string, string>;
};

type FormData = {
  name: string;
  email: string;
  message: string;
  website: string;   // Honeypot
  privacy: boolean;  // DSGVO Checkbox
};

export default function Contact() {
  const { props } = usePage<PageProps>();
  const flashSuccess = props.flash?.success;
  const serverErrors = props.errors || {};

  const { data, setData, post, processing, errors, reset, clearErrors } = useForm<FormData>({
    name: "",
    email: "",
    message: "",
    website: "",
    privacy: false,
  });

  const submit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    clearErrors();

    post("/contact", {
      onSuccess: () => {
        reset("name", "email", "message", "website");
        setData("privacy", false);
      },
    });
  };

  return (
    <div className="max-w-xl mx-auto bg-gray-100 sm:bg-white rounded-lg sm:shadow p-6 text-gray-700 mt-16">
      <h1 className="text-2xl font-bold mb-4">Kontakt</h1>

      {flashSuccess && (
        <div className="mb-4 rounded-md p-3 text-sm bg-green-50 text-green-700">
          {flashSuccess}
        </div>
      )}
      {/* {serverErrors.message && (
        <div className="mb-4 rounded-md p-3 text-sm bg-red-50 text-red-700">
          {serverErrors.message}
        </div>
      )} */}

      <form onSubmit={submit} className="space-y-4">
        {/* Honeypot (unsichtbar) */}
        <div className="hidden">
          <label htmlFor="website" className="block text-sm font-medium">Website</label>
          <input
            id="website"
            name="website"
            value={data.website}
            onChange={(e) => setData("website", e.target.value)}
            autoComplete="off"
            tabIndex={-1}
          />
        </div>

        <div>
          <label htmlFor="name" className="block text-sm font-medium">Name</label>
          <input
            id="name"
            name="name"
            value={data.name}
            onChange={(e) => setData("name", e.target.value)}
            className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-gray-600"
          />
          {(errors.name || serverErrors.name) && (
            <p className="text-sm text-red-600 mt-1">{errors.name || serverErrors.name}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium">E-Mail</label>
          <input
            id="email"
            type="email"
            name="email"
            value={data.email}
            onChange={(e) => setData("email", e.target.value)}
            className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-gray-600"
          />
          {(errors.email || serverErrors.email) && (
            <p className="text-sm text-red-600 mt-1">{errors.email || serverErrors.email}</p>
          )}
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium">Nachricht</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={data.message}
            onChange={(e) => setData("message", e.target.value)}
            className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-gray-600"
          />
          {(errors.message || serverErrors.message) && (
            <p className="text-sm text-red-600 mt-1">{errors.message || serverErrors.message}</p>
          )}
        </div>

        {/* DSGVO-Checkbox */}
        <div className="flex items-start gap-2">
          <input
            id="privacy"
            name="privacy"
            type="checkbox"
            checked={data.privacy}
            onChange={(e) => setData("privacy", e.target.checked)}
            className="mt-1"
          />
          <label htmlFor="privacy" className="text-sm">
            Ich habe die{" "}
            <a href="/privacy" className="underline">Datenschutzerklärung</a> gelesen und akzeptiere die Verarbeitung meiner Angaben.
          </label>
        </div>
        {(errors.privacy || serverErrors.privacy) && (
          <p className="text-sm text-red-600 -mt-2">{errors.privacy || serverErrors.privacy}</p>
        )}

        <button
          type="submit"
          disabled={processing}
          className="inline-flex items-center justify-center rounded-md bg-gray-600 px-4 py-2 text-white font-medium hover:bg-gray-700 disabled:opacity-60"
        >
          {processing ? "Senden…" : "Nachricht senden"}
        </button>
      </form>
    </div>
  );
}
