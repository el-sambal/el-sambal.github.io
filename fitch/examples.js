let ex1 = `1 | A ∧ B
  |----
2 | B             ∧ Elim: 1
3 | A             ∧ Elim: 1
4 | B ∧ A         ∧ Intro: 2, 3`;

let ex2 = `1 | P(a) ∧ P(b)
2 | (a=c) ∨ (b=c)
  |----
3 | | a=c
  | |----
4 | | P(a)                ∧ Elim: 1
5 | | P(c)                = Elim: 4, 3
  |
6 | | b=c
  | |----
7 | | P(b)                ∧ Elim: 1
8 | | P(c)                = Elim: 7, 6
9 | P(c)                  ∨ Elim: 2, 3-5, 6-8`;


let ex3 = `1  | ∀x∃y R(x,y) → ∃y∀x R(x,y)
   | ---
2  | | ¬(∀x∃y R(x,y) ∨ ¬∀x∃y R(x,y))
   | | ---
3  | | | ∀x∃y R(x,y)
   | | | ---
4  | | | ∀x∃y R(x,y) ∨ ¬∀x∃y R(x,y)           ∨ Intro: 3
5  | | | ⊥                                    ⊥ Intro: 4,2
6  | | ¬∀x∃y R(x,y)                           ¬ Intro: 3-5
7  | | ∀x∃y R(x,y) ∨ ¬∀x∃y R(x,y)             ∨ Intro: 6
8  | | ⊥                                      ⊥ Intro: 7,2
9  | ¬¬(∀x∃y R(x, y) ∨ ¬∀x∃y R(x, y))         ¬ Intro: 2-8
10 | ∀x∃y R(x, y) ∨ ¬∀x∃y R(x, y)             ¬ Elim: 9
11 | | ∀x∃y R(x,y)
   | | ---
12 | | ∃y∀x R(x, y)                           → Elim: 1,11
13 | | ∃y∀x R(x, y) ∨ ∃x∀y¬R(x, y)            ∨ Intro: 12
   |
14 | | ¬∀x∃y R(x, y)
   | | ---
15 | | | ¬∃x∀y ¬R(x, y)
   | | | ---
16 | | | | [a]
   | | | | ---
17 | | | | | ∀y¬R(a, y)
   | | | | | ---
18 | | | | | ∃x∀y ¬R(x, y)                    ∃ Intro: 17
19 | | | | | ⊥                                ⊥ Intro: 18,15
20 | | | | ¬∀y ¬R(a, y)                       ¬ Intro: 17-19
21 | | | | | ¬∃y R(a, y)
   | | | | | ---
22 | | | | | | [b]
   | | | | | | ---
23 | | | | | | | R(a,b)
   | | | | | | | ---
24 | | | | | | | ∃y R(a, y)                   ∃ Intro: 23
25 | | | | | | | ⊥                            ⊥ Intro: 24, 21
26 | | | | | | ¬R(a, b)                       ¬ Intro: 23-25
27 | | | | | ∀y ¬R(a, y)                      ∀ Intro: 22-26
28 | | | | | ⊥                                ⊥ Intro: 27,20
29 | | | | ¬¬∃y R(a, y)                       ¬ Intro: 21-28
30 | | | | ∃y R(a, y)                         ¬ Elim: 29
31 | | | ∀x∃y R(x, y)                         ∀ Intro: 16-30
32 | | | ⊥                                    ⊥ Intro: 31,14
33 | | ¬¬∃x∀y ¬R(x, y)                        ¬ Intro: 15-32
34 | | ∃x∀y ¬R(x, y)                          ¬ Elim: 33
35 | | ∃y∀x R(x, y) ∨ ∃x∀y ¬R(x, y)           ∨ Intro: 34
36 | ∃y∀x R(x, y) ∨ ∃x∀y ¬R(x, y)             ∨ Elim: 10, 11-13, 14-35
37 | | ∃x∀y¬R(x, y)
   | | ---
38 | | | [c] ∀y ¬R(c, y)
   | | | ---
39 | | | ∀y¬R(c, y) ∨ ∀y R(y, c)              ∨ Intro: 38
40 | | | ∃x(∀y¬R(x, y) ∨ ∀y R(y, x))          ∃ Intro: 39
41 | | ∃x(∀y¬R(x, y) ∨ ∀y R(y, x))            ∃ Elim: 37, 38-40
   |
42 | | ∃y∀x R(x, y)
   | | ---
43 | | | [d] ∀x R(x, d)
   | | | ---
44 | | | | [e]
   | | | | ---
45 | | | | R(e,d)                             ∀ Elim: 43
46 | | | ∀y R(y, d)                           ∀ Intro: 44-45
47 | | | ∀y¬R(d, y) ∨ ∀y R(y, d)              ∨ Intro: 46
48 | | | ∃x(  ∀y¬R(x, y) ∨ ∀y R(y, x))        ∃ Intro: 47
49 | | ∃x(∀y ¬R(x, y) ∨  ∀y R(y, x))          ∃ Elim: 42, 43-48
50 | ∃x(∀y¬R(x,y) ∨ ∀y R(y,x))                ∨ Elim: 36, 42-49, 37-41
`;
