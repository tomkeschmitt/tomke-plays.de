"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { signIn } from 'next-auth/react';
import { Eye, EyeOff, Mail, Lock } from 'lucide-react'; // Premium Icons

type dataType = { email: string, password: string }

function Form() {
  const { register, formState: { errors }, handleSubmit } = useForm<dataType>({
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const [showPass, setShowPass] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState("")
  const router = useRouter()

  const onSubmit = async (data: dataType) => {
    setLoading(true)
    setErrorMsg("")
    try {
      const status = await signIn("credentials", {
        redirect: false,
        ...data
      })

      if (status?.ok) {
        router.push("/")
        router.refresh() // Aktualisiert die Navbar sofort
      } else {
        setErrorMsg("E-Mail oder Passwort falsch.")
      }

    } catch (error) {
      console.log(error)
      setErrorMsg("Ein unerwarteter Fehler ist aufgetreten.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white border border-slate-200 p-10 rounded-[2.5rem] shadow-2xl shadow-slate-200/50"
      >
        <div className="text-center mb-10">
          <h2 className="text-3xl font-black text-slate-900 tracking-tighter">Welcome Back</h2>
          <p className="text-slate-400 text-sm font-medium mt-2">Logge dich in deinen Account ein</p>
        </div>

        {/* ERROR MESSAGE ALERT */}
        {errorMsg && (
          <div className="mb-6 p-4 bg-red-50 border border-red-100 text-red-600 text-xs font-bold rounded-2xl text-center animate-shake">
            {errorMsg}
          </div>
        )}

        {/* EMAIL INPUT */}
        <div className="mb-6">
          <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-4 mb-2 block">
            Email Addresse
          </label>
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              autoFocus
              type="email"
              placeholder="deine@mail.de"
              className={`w-full pl-12 pr-4 py-4 bg-slate-50 border-none rounded-2xl text-sm font-medium focus:ring-2 focus:ring-blue-500 transition-all outline-none ${errors.email ? 'ring-2 ring-red-500' : ''}`}
              {...register("email", {
                required: "E-Mail wird benötigt",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Ungültige E-Mail"
                },
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
                required: "Passwort wird benötigt",
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

        {/* LOGIN BUTTON */}
        <button
          disabled={loading}
          className="w-full py-4 bg-slate-900 text-white rounded-2xl font-bold text-sm hover:bg-blue-600 hover:shadow-xl hover:shadow-blue-200 transition-all active:scale-95 disabled:opacity-50"
          type='submit'
        >
          {loading ? "Wird geprüft..." : "Einloggen"}
        </button>

        <p className="text-center mt-8 text-xs font-bold text-slate-400 uppercase tracking-widest cursor-pointer hover:text-slate-900 transition-colors" onClick={() => router.push('/signup')}>
          Noch kein Account? <span className="text-blue-600">Registrieren</span>
        </p>
      </form>
    </div>
  )
}

export default Form
