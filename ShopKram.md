<div className="group flex flex-col bg-white border border-slate-200 rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">

            {/* BILD BEREICH */}
            <div className="relative h-64 w-full bg-slate-100/50 flex items-center justify-center p-12 overflow-hidden border-b border-slate-100">
              <Image
                src={Logo}
                alt="Test Produkt"
                width={200}
                height={200}
                className="object-contain group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl shadow-sm border border-white">
                <p className="text-xl font-black text-slate-900">10.00 €</p>
              </div>
            </div>

            {/* INFO BEREICH */}
            <div className="p-8 flex flex-col flex-grow">
              <h2 className="text-2xl font-black text-slate-900 mb-2 tracking-tight">
                Test Produkt
              </h2>

              {/* BESCHREIBUNG */}
              <p className="text-slate-500 text-sm leading-relaxed mb-8">
                Dies ist eine Beispielbeschreibung für dein Produkt. Hier kannst du alle Features,
                Vorteile oder Details erklären.
              </p>

              <div className="mt-auto relative z-10">
                <PayPalButtons
                  style={{
                    layout: "vertical",
                    color: "blue",
                    shape: "pill",
                    label: "pay"
                  }}
                  createOrder={(data, actions) => {
                    return actions.order.create({
                      purchase_units: [
                        {
                          amount: {
                            currency_code: "EUR",
                            value: "10.00"
                          },
                        },
                      ],
                    });
                  }}
                  onApprove={(data, actions) => {
                    if (!actions.order) return Promise.reject();
                    return actions.order.capture().then((details) => {
                      alert("Zahlung erfolgreich von " + details.payer.name?.given_name);
                    });
                  }}
                />
              </div>
            </div>
          </div>