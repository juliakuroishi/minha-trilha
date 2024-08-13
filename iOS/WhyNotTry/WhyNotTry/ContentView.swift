//
//  ContentView.swift
//  WhyNotTry
//
//  Created by julia on 13/08/24.
//

import SwiftUI

struct ContentView: View { //define o ponto de entrada do codigo: ponto de renderizar a interface grafica
    @State private var selected = "Baseball"
    @State private var id = 1
        
    var atividades = ["Archery", "Baseball", "Basketball", "Bowling", "Boxing", "Cricket", "Curling", "Fencing", "Golf", "Hiking", "Lacrosse", "Rugby", "Squash"]
    var cores: [Color] = [.blue, .cyan, .gray, .green, .indigo, .mint, .orange, .pink, .purple, .red]
    var body: some View { //
        VStack { //organiza os elementos em uma pilha vertical
            Spacer()
            Text("Por que não tentar...")
                .font(.largeTitle.bold())
            Spacer()
            Circle()
                .fill(cores.randomElement() ?? .green)
                .padding()
                .overlay(
                    Image(systemName: "figure.\(selected.lowercased())")
                        .font(.system(size: 144))
                        .foregroundColor(.white)
                )
            Text("\(selected)")
                .font(.title)
            
                
            
        }
        .transition(.slide)
        .id(id)
        
        Button("Tente outro") {
            withAnimation (.easeInOut(duration: 1)){
                selected = atividades.randomElement() ?? "Archery"
                id += 1
            }
        }
        .buttonStyle(.borderedProminent)
        Spacer()
    }
}


#Preview {
    ContentView()
}

