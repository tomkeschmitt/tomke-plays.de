"use client";

import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { Eye, EyeOff, User, Mail, Lock } from 'lucide-react'; // Premium Icons

type dataType = { name: string, email: string, password: string }

function Form() {
  const { register, formState: { errors }, handleSubmit } = useForm<dataType>({
    defaultValues: { name: "", email: "", password: "" },
  });

  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false); // Für Button-Animation
  const router = useRouter();

  const onSubmit: SubmitHandler<dataType> = async data => {
    setLoading(true);
    try {
      await axios.post("/api/auth/signup", { ...data });
      router.push('/login');
    } catch (error) {
      console.log(error);
      alert("Fehler beim Erstellen des Accounts.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white border border-slate-200 p-10 rounded-[2.5rem] shadow-2xl shadow-slate-200/50"
      >
        <div className="text-center mb-10">
          <h2 className="text-3xl font-black text-slate-900 tracking-tighter">Join the Hub</h2>
          <p className="text-slate-400 text-sm font-medium mt-2">Erstelle deinen TomkePlays Account</p>
        </div>

        {/* NAME INPUT */}
        <div className="mb-6">
          <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-4 mb-2 block">
            Name
          </label>
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              type="text"
              placeholder="Vorname Nachname"
              className={`w-full pl-12 pr-4 py-4 bg-slate-50 border-none rounded-2xl text-sm font-medium focus:ring-2 focus:ring-blue-500 transition-all outline-none ${errors.name ? 'ring-2 ring-red-500' : ''}`}
              {...register("name", {
                required: "Name wird benötigt",
                minLength: { value: 3, message: "Mindestens 3 Zeichen" }
              })}
            />
          </div>
          {errors.name && <p className="mt-1.5 ml-4 text-[10px] font-bold text-red-500 uppercase tracking-wider">{errors.name.message}</p>}
        </div>

        {/* EMAIL INPUT */}
        <div className="mb-6">
          <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-4 mb-2 block">
            Email Addresse
          </label>
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              type="email"
              placeholder="deine@mail.de"
              className={`w-full pl-12 pr-4 py-4 bg-slate-50 border-none rounded-2xl text-sm font-medium focus:ring-2 focus:ring-blue-500 transition-all outline-none ${errors.email ? 'ring-2 ring-red-500' : ''}`}
              {...register("email", {
                required: "Email wird benötigt",
                pattern: { value: /^\S+@\S+$/i, message: "Ungültige Email" }
              })}
            />
          </div>
          {errors.email && <p className="mt-1.5 ml-4 text-[10px] font-bold text-red-500 uppercase tracking-wider">{errors.email.message}</p>}
        </div>

        {/* PASSWORD INPUT */}
        <div className="mb-10">
          <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-4 mb-2 block">
            Passwort
          </label>
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              type={showPass ? "text" : "password"}
              placeholder="Dein Passwort"
              className={`w-full pl-12 pr-12 py-4 bg-slate-50 border-none rounded-2xl text-sm font-medium focus:ring-2 focus:ring-blue-500 transition-all outline-none ${errors.password ? 'ring-2 ring-red-500' : ''}`}
              {...register("password", {
                required: "Passwort benötigt",
                pattern: {
                  value: /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
                  message: "Passwort ist zu schwach"
                }
              })}
            />
            <button
              type="button"
              onClick={() => setShowPass(!showPass)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
            >
              {showPass ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          {errors.password && <p className="mt-1.5 ml-4 text-[10px] font-bold text-red-500 uppercase tracking-wider">{errors.password.message}</p>}
        </div>

        {/* SUBMIT BUTTON */}
        <button
          disabled={loading}
          className="w-full py-4 bg-slate-900 text-white rounded-2xl font-bold text-sm hover:bg-blue-600 hover:shadow-xl hover:shadow-blue-200 transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
          type='submit'
        >
          {loading ? "Wird erstellt..." : "Account erstellen"}
        </button>
      </form>
    </div>
  );
}

export default Form;
