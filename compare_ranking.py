import re

# User's Ranking List (pasted from input)
user_ranking_text = """
1. Snow
2. Budweiser
3. Bud Light
4. Skol
5. Corona Extra
6. Harbin
7. Heineken
8. Tsingtao
9. Stella Artois
10. Sapporo
11. Yanjing
12. Modelo Especial
13. Yebisu
14. Asahi
15. Tiger
16. Dos Equis
17. Pacifico
18. Tecate
19. Sol
20. San Miguel
21. Budějovický Budvar
22. Pilsner Urquell
23. Kozel
24. Staropramen
25. Beck’s
26. Carlsberg
27. Tuborg
28. Amstel
29. Amstel Light
30. Grolsch
31. Foster’s
32. Miller
33. Miller Lite
34. Coors
35. Coors Light
36. Michelob
37. Michelob Ultra
38. Old Milwaukee
39. Busch
40. Busch Light
41. Natural Light
42. Keystone
43. Keystone Light
44. Yuengling
45. Samuel Adams
46. Rolling Rock
47. Victoria Bitter (VB)
48. XXXX (Four X)
49. Tooheys
50. Coopers
51. Estrella Damm
52. Mahou
53. Cruzcampo
54. Estrella Galicia
55. Perła
56. Tyskie
57. Żywiec
58. Lech
59. Okocim
60. Nastro Azzurro
61. Menabrea
62. Ichnusa
63. Dreher
64. Efes Pilsen
65. Mythos
66. Fix Hellas
67. Alpha Beer
68. Carling Black Label
69. Castle Lager
70. Hansa
71. Windhoek Lager
72. Tusker
73. Nile Special
74. Primus
75. Labatt Blue
76. Molson Canadian
77. Alexander Keith’s
78. Kokanee
79. Moosehead
80. Sleeman
81. Pacifico Clara
82. Victoria (México)
83. Bohemia
84. Superior
85. Presidente
86. Polar
87. Solera
88. Cusqueña
89. Cristal
90. Pilsen Callao
91. Baltika
92. Obolon
93. Zhigulevskoye
94. Yarpivo
95. Okhota
96. Bavaria (Holanda)
97. Hite
98. Cass
99. OB Lager
100. Saigon Beer
101. 333 Export
102. Bia Hanoi
103. Larue
104. Bintang (Vietnam)
105. Angkor
106. Beerlao
107. Taiwan Beer
108. San Miguel Pale Pilsen
109. Red Horse Beer
110. Gold Star
111. Maccabee
112. Almaza
113. Flag Speciale
114. Stella Artois (África)
115. Tusker Lite
116. Nigerian Breweries Star
117. Hero Lager
118. 33 Export
119. Castle Lite
120. Flying Horse
121. Heineken Light
122. Carlsberg Elephant
123. Tuborg Green
124. Ringnes
125. Aass
126. Lapin Kulta
127. Olvi
128. Koff
129. Sinebrychoff
130. Mythos Radler
131. Keo
132. Cisk
133. Paulaner
134. Spaten
135. Löwenbräu
136. Augustiner Bräu
137. Erdinger Weissbier
138. Weihenstephaner Original
139. Gambrinus
140. Starobrno
141. Velkopopovický Kozel
142. Laško
143. Karlovačko
144. Jelen
145. Zaječarsko
146. Nikšićko
147. Mythos Ice
148. Kamenitza
149. Zagorka
150. Ariana
151. Šariš
152. Topvar
153. Ursus
154. Timișoreana
155. Ciuc
156. Noroc
157. Bergenbier
158. Staropramen Dark
159. Puntigamer
160. Ottakringer
161. Stiegl
162. Gösser
163. Zipfer
164. Franziskaner Weissbier
165. Ayinger Celebrator
166. Paulaner Salvator
167. Schneider Weisse
168. Weihenstephaner Hefeweissbier
169. Krombacher
170. Warsteiner
171. Bitburger
172. Veltins
173. Paulaner Hefe-Weißbier
174. Spaten
175. Löwenbräu
176. Augustiner Bräu
177. Stiegl
178. Gösser
179. Zipfer
180. Aass
181. Lapin Kulta
182. Olvi
183. Koff
184. Sinebrychoff
185. Staropramen Dark
186. Puntigamer
187. Ottakringer
188. Topvar
189. Šariš
190. Kamenitza
191. Ariana
192. Noroc
193. Bergenbier
194. Jelen Pivo
195. Zaječarsko
196. Nikšićko
197. Ursus
198. Ciuc
199. Timișoreana
200. Flag Speciale
201. Nigerian Breweries Star
202. Hero Lager
203. Flying Horse
204. Carling Lager
205. Tusker Lite
206. 33 Export
207. Cisk
208. Keo
209. Mythos Ice
210. OB Lager
211. Yarpivo
212. Okhota
213. Bia Hanoi
214. Saigon Beer
215. 333 Export
216. Bintang (Vietnam)
217. Angkor
218. Beerlao
219. Taiwan Beer
220. Pacifico Clara
221. Victoria (México)
222. Superior
223. Solera
224. Cusqueña
225. Cristal
226. Pilsen Callao
227. Sleeman
228. Kokanee
229. Alexander Keith’s
230. Molson Canadian
231. Labatt Blue
232. Moosehead
233. Baltika
234. Obolon
235. Zhigulevskoye
236. Yebisu
237. Tyskie
238. Perła
239. Estrella Galicia
240. Cruzcampo
241. Estrella Damm
"""

# Parsing logic
ranking_lines = user_ranking_text.strip().split('\n')
ranking_brands = []
for line in ranking_lines:
    # Remove number and dot: "1. Snow" -> "Snow"
    clean_line = re.sub(r'^\d+\.\s*', '', line).strip()
    ranking_brands.append(clean_line)

# Load current Top 250
file_path_top250 = '/Users/oseiassilvadossantos/Desktop/beersl/js/data/top-250-beers.js'
with open(file_path_top250, 'r', encoding='utf-8') as f:
    content = f.read()

# Extract actives
active_matches = re.findall(r'"([^"]+)"', content)
active_brands = set(active_matches)

# Do the comparison
# Need to handle fuzzy matching or exact matching?
# Some names might differ slightly (e.g., "Victoria Bitter (VB)" vs "Victoria Bitter").
# We will do exact match first, then list partials.

present_in_ranking_but_missing_in_site = []
present_in_site_but_missing_in_ranking = []

# Naive normalization for checking
def normalize(s):
    return s.lower().replace(r'\s*\(.*?\)', '').strip() # Remove parenthesis content

active_norm = {normalize(x): x for x in active_matches}
ranking_norm = {normalize(x): x for x in ranking_brands}

for rb_norm, rb_original in ranking_norm.items():
    if rb_norm not in active_norm:
        present_in_ranking_but_missing_in_site.append(rb_original)

for ab_norm, ab_original in active_norm.items():
    if "strict" in ab_norm: continue # ignore "use strict"
    if ab_norm not in ranking_norm:
        present_in_site_but_missing_in_ranking.append(ab_original)

print(f"Total Ranked Brands provided: {len(ranking_brands)}")
print(f"Total Site Brands: {len(active_brands)}")
print("\n--- Missing from Site (In Ranking List but not in top-250-beers.js) ---")
for b in present_in_ranking_but_missing_in_site:
    print(b)
    
print("\n--- Extra in Site (In Site but not in Ranking List) ---")
# Limit output if too huge
for b in present_in_site_but_missing_in_ranking[:20]:
    print(b)
if len(present_in_site_but_missing_in_ranking) > 20:
    print(f"... and {len(present_in_site_but_missing_in_ranking) - 20} more.")
