60 0a     ;length of our code
60 0d     ;bytecode offset to read from
60 00     ;memory offset to write to
39        ;copy code
60 0a     ;length of copied code
60 00
f3        ;return
00        ;stop
60 2a     ;push decimal 42
60 10     ;memory offset
52        ;mstore
60 20     ;length of a storage slot, 32 bytes)
60 10     ;return value from 0x10 memory slot )
f3        ;return
