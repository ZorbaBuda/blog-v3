"use client";
import config from "@/lib/config.json";
import { getListPage } from "@/lib/contentParser";
import PageHeader from "@/components/PageHeader";
import SeoMeta from "@/components/SeoMeta";
import { RegularPage } from "@/types";
import { Container } from "@/components/layouts/Container";
import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    try {
      const response = await fetch("api/contact", {
        method: "post",
        body: formData,
      });

      if (!response.ok) {
        console.log("falling over");
        throw new Error(`response status: ${response.status}`);
      }
      const responseData = await response.json();
      console.log(responseData["message"]);

      alert("Message successfully sent");
    } catch (err) {
      console.error(err);
      alert("Error, please try resubmitting the form");
    }
  }

  const { contact_form_action } = config.params;
  const title = "Contacto";
  const meta_title = "";
  const description = "this is a meta description";
  const image = "";

  return (
    <Container>
      <SeoMeta
        title={title}
        meta_title={meta_title}
        description={description}
        image={image}
      />
      <PageHeader title={title} />
      <section className="py-16 xl:py-20">
        <div className="mx-auto max-w-5xl px-4">
          <div className="row">
            <div className="mx-auto md:col-10 lg:col-6">
              <form 
                onSubmit={handleSubmit}
                 >
                <div className="mb-6">
                  <label htmlFor="form-name" className="form-label">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="form-name"
                    name="name"
                    className="form-input"
                    placeholder="John Doe"
                    required
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    type="text"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="form-email" className="form-label">
                    Working Mail <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="form-email"
                    name="email"
                    className="form-input"
                    placeholder="john.doe@email.com"
                    required
                    maxLength={80}
                    autoComplete="email"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    type="email"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="form-message" className="form-label">
                    Anything else? <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="form-message"
                    name="message"
                    required
                    className="form-input"
                    placeholder="Message goes here..."
                    rows={8}

                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                  ></textarea>
                </div>
                <button
                  type="submit"
                 
                  className=" mt-5 border-[1px] border-slate-400 rounded-sm text-sm 
                   tracking-wider  dark:text-slate-400 text-dark flex px-6 py-3 uppercase
                   hover:bg-[#f02b2b] hover:text-black group-dark:hover:text-black"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Contact;
