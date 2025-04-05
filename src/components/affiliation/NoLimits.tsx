
import React from "react";
import { Button } from "@/components/ui/button";

const NoLimits = () => {
  return (
    <section className="py-16 px-4 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-2 bg-white/10 rounded-full text-white mb-6">
            <span className="font-medium">Combien je peux gagner ?</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Aucune limite !</h2>
          <p className="text-xl md:text-2xl">Plus vous parrainez de personnes, plus vous gagnez d'argent.</p>
        </div>
        
        <div className="flex justify-center mb-16">
          <div className="relative">
            <div className="w-full max-w-xl mx-auto">
              <img 
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDgwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjUwLCAxMDApIj4KICAgIDxjaXJjbGUgY3g9IjE1MCIgY3k9IjEwMCIgcj0iMTAwIiBmaWxsPSIjRUEzQTcwIi8+CiAgICA8dGV4dCB4PSIxNTAiIHk9IjExMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0id2hpdGUiPlZPUyBHQUlOUzwvdGV4dD4KICAgIDx0ZXh0IHg9IjE1MCIgeT0iMTUwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iNDAiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSJ3aGl0ZSI+MzE5NuKCrDwvdGV4dD4KICA8L2c+CgogIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwMCwgNTApIj4KICAgIDxjaXJjbGUgY3g9IjUwIiBjeT0iNTAiIHI9IjUwIiBzdHJva2U9IiNFQTNBNzAiIHN0cm9rZS13aWR0aD0iMyIgZmlsbD0id2hpdGUiLz4KICAgIDx0ZXh0IHg9IjUwIiB5PSI2MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjQwIiBmaWxsPSIjRUEzQTcwIj7wn5StPC90ZXh0PgogIDwvZz4KCiAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjAwLCAyMCkiPgogICAgPGNpcmNsZSBjeD0iNTAiIGN5PSI1MCIgcj0iNTAiIHN0cm9rZT0iI0VBM0E3MCIgc3Ryb2tlLXdpZHRoPSIzIiBmaWxsPSJ3aGl0ZSIvPgogICAgPHRleHQgeD0iNTAiIHk9IjYwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iNDAiIGZpbGw9IiNFQTNBNzAiPvCfkK08L3RleHQ+CiAgPC9nPgoKICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0MDAsIDIwKSI+CiAgICA8Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI1MCIgc3Ryb2tlPSIjRUEzQTcwIiBzdHJva2Utd2lkdGg9IjMiIGZpbGw9IndoaXRlIi8+CiAgICA8dGV4dCB4PSI1MCIgeT0iNjAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSI0MCIgZmlsbD0iI0VBM0E3MCI+8J+QrTwvdGV4dD4KICA8L2c+CgogIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUwMCwgNTApIj4KICAgIDxjaXJjbGUgY3g9IjUwIiBjeT0iNTAiIHI9IjUwIiBzdHJva2U9IiNFQTNBNzAiIHN0cm9rZS13aWR0aD0iMyIgZmlsbD0id2hpdGUiLz4KICAgIDx0ZXh0IHg9IjUwIiB5PSI2MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjQwIiBmaWxsPSIjRUEzQTcwIj7wn5CtPC90ZXh0PgogIDwvZz4KCiAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTAwLCAxODApIj4KICAgIDxjaXJjbGUgY3g9IjUwIiBjeT0iNTAiIHI9IjUwIiBzdHJva2U9IiNFQTNBNzAiIHN0cm9rZS13aWR0aD0iMyIgZmlsbD0id2hpdGUiLz4KICAgIDx0ZXh0IHg9IjUwIiB5PSI2MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjQwIiBmaWxsPSIjRUEzQTcwIj7wn5CtPC90ZXh0PgogIDwvZz4KCiAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTAwLCAxODApIj4KICAgIDxjaXJjbGUgY3g9IjUwIiBjeT0iNTAiIHI9IjUwIiBzdHJva2U9IiNFQTNBNzAiIHN0cm9rZS13aWR0aD0iMyIgZmlsbD0id2hpdGUiLz4KICAgIDx0ZXh0IHg9IjUwIiB5PSI2MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjQwIiBmaWxsPSIjRUEzQTcwIj7wn5CtPC90ZXh0PgogIDwvZz4KCiAgPCEtLSBDb25uZWN0aW5nIExpbmVzIGFuZCBDaXJjbGVzIC0tPgogIDxnIHN0cm9rZT0iI0VBM0E3MCIgc3Ryb2tlLXdpZHRoPSIyIj4KICAgIDxsaW5lIHgxPSIxNzAiIHkxPSI5MCIgeDI9IjMwMCIgeTI9IjE1MCIgbWFya2VyLWVuZD0idXJsKCNhcnJvd2hlYWQpIiAvPgogICAgPGxpbmUgeDE9IjI3MCIgeTE9IjkwIiB4Mj0iMzMwIiB5Mj0iMTMwIiBtYXJrZXItZW5kPSJ1cmwoI2Fycm93aGVhZCkiIC8+CiAgICA8bGluZSB4MT0iNDMwIiB5MT0iOTAiIHgyPSIzNzAiIHkyPSIxMzAiIG1hcmtlci1lbmQ9InVybCgjYXJyb3doZWFkKSIgLz4KICAgIDxsaW5lIHgxPSI1MzAiIHkxPSI5MCIgeDI9IjQwMCIgeTI9IjE1MCIgbWFya2VyLWVuZD0idXJsKCNhcnJvd2hlYWQpIiAvPgogICAgPGxpbmUgeDE9IjE3MCIgeTE9IjIyMCIgeDI9IjMwMCIgeTI9IjE3MCIgbWFya2VyLWVuZD0idXJsKCNhcnJvd2hlYWQpIiAvPgogICAgPGxpbmUgeDE9IjUzMCIgeTE9IjIyMCIgeDI9IjQwMCIgeTI9IjE3MCIgbWFya2VyLWVuZD0idXJsKCNhcnJvd2hlYWQpIiAvPgogIDwvZz4KCiAgPCEtLSBTbWFsbCBjaXJjbGVzIHdpdGggYW1vdW50IC0tPgogIDxnPgogICAgPGNpcmNsZSBjeD0iMjIwIiBjeT0iMTIwIiByPSIyMCIgZmlsbD0id2hpdGUiIHN0cm9rZT0iI0VBM0E3MCIgc3Ryb2tlLXdpZHRoPSIyIiAvPgogICAgPHRleHQgeD0iMjIwIiB5PSIxMjUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMiIgZmlsbD0iI0VBM0E3MCI+KyAzMOKCrDwvdGV4dD4KICA8L2c+CgogIDxnPgogICAgPGNpcmNsZSBjeD0iMzAwIiBjeT0iMTAwIiByPSIyMCIgZmlsbD0id2hpdGUiIHN0cm9rZT0iI0VBM0E3MCIgc3Ryb2tlLXdpZHRoPSIyIiAvPgogICAgPHRleHQgeD0iMzAwIiB5PSIxMDUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMiIgZmlsbD0iI0VBM0E3MCI+KyAzMOKCrDwvdGV4dD4KICA8L2c+CgogIDxnPgogICAgPGNpcmNsZSBjeD0iNDAwIiBjeT0iMTAwIiByPSIyMCIgZmlsbD0id2hpdGUiIHN0cm9rZT0iI0VBM0E3MCIgc3Ryb2tlLXdpZHRoPSIyIiAvPgogICAgPHRleHQgeD0iNDAwIiB5PSIxMDUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMiIgZmlsbD0iI0VBM0E3MCI+KyAzMOKCrDwvdGV4dD4KICA8L2c+CgogIDxnPgogICAgPGNpcmNsZSBjeD0iNDgwIiBjeT0iMTIwIiByPSIyMCIgZmlsbD0id2hpdGUiIHN0cm9rZT0iI0VBM0E3MCIgc3Ryb2tlLXdpZHRoPSIyIiAvPgogICAgPHRleHQgeD0iNDgwIiB5PSIxMjUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMiIgZmlsbD0iI0VBM0E3MCI+KyAzMOKCrDwvdGV4dD4KICA8L2c+CgogIDxnPgogICAgPGNpcmNsZSBjeD0iMjIwIiBjeT0iMTgwIiByPSIyMCIgZmlsbD0id2hpdGUiIHN0cm9rZT0iI0VBM0E3MCIgc3Ryb2tlLXdpZHRoPSIyIiAvPgogICAgPHRleHQgeD0iMjIwIiB5PSIxODUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMiIgZmlsbD0iI0VBM0E3MCI+KyAzMOKCrDwvdGV4dD4KICA8L2c+CgogIDxnPgogICAgPGNpcmNsZSBjeD0iNDgwIiBjeT0iMTgwIiByPSIyMCIgZmlsbD0id2hpdGUiIHN0cm9rZT0iI0VBM0E3MCIgc3Ryb2tlLXdpZHRoPSIyIiAvPgogICAgPHRleHQgeD0iNDgwIiB5PSIxODUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMiIgZmlsbD0iI0VBM0E3MCI+KyAzMOKCrDwvdGV4dD4KICA8L2c+CgogIDwhLS0gRGVmaW5lIHRoZSBhcnJvd2hlYWQgbWFya2VyIC0tPgogIDxkZWZzPgogICAgPG1hcmtlciBpZD0iYXJyb3doZWFkIiBtYXJrZXJXaWR0aD0iMTAiIG1hcmtlckhlaWdodD0iNyIgcmVmWD0iMCIgcmVmWT0iMy41IiBvcmllbnQ9ImF1dG8iPgogICAgICA8cG9seWdvbiBwb2ludHM9IjAgMCwgMTAgMy41LCAwIDciIGZpbGw9IiNFQTNBNzAiIC8+CiAgICA8L21hcmtlcj4KICA8L2RlZnM+Cjwvc3ZnPg==" 
                alt="Diagramme des gains d'affiliation" 
                className="w-full"
              />
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <div className="flex flex-col items-center gap-4 mb-10">
            <p className="text-xl">100 abonnements via votre lien</p>
            <div className="text-yellow-400 text-4xl">👇</div>
            <p className="text-4xl md:text-5xl font-bold">
              <span className="text-pink-500">3000 €</span> de commission*
            </p>
          </div>
          
          <Button className="bg-pink-500 hover:bg-pink-600 text-white rounded-full px-8 py-6 text-lg mb-8">
            Rejoindre le programme
          </Button>
          
          <p className="text-xs text-gray-400 text-right">
            *Exemple avec abonnements annuels. Les montants indiqués sont susceptibles d'être modifiés à tout moment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NoLimits;
