import type { Route } from "./+types/home";
import Navbar from "~/components/Navbar";
import {resumes} from "../../constants";
import ResumeCard from "~/components/ResumeCard";
import {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router";
import {usePuterStore} from "~/lib/puter";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumeai" },
    { name: "description", content: "Get feedback for your job!" },
  ];
}

export default function Home() {
    const { auth} = usePuterStore();
    const navigate = useNavigate();

    useEffect(() => {
        if(!auth.isAuthenticated) navigate('/auth?next=/');
    }, [auth.isAuthenticated])

  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
      <Navbar />
      <section className="main-section">
          <div className="page-heading py-16">
              <h1>Track your applications & resume ratings</h1>
              <h2>Review your submission and check AI-powered feedback. </h2>

          </div>
      </section>

      {resumes.length > 0 && (
          <div className="resumes-section">
              {resumes.map((resume) => (
                  <ResumeCard key={resume.id} resume={resume} />
              ))}

          </div>
      )}
  </main>
}