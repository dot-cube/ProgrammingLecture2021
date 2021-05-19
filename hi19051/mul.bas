Function multiplication(a, x)
    Dim ans() As Double
    ReDim ans(UBound(a), UBound(x, 2))
    For i = 1 To UBound(a)
        For j = 1 To UBound(x, 2)
            ans(i, j) = 0
            For k = 1 To UBound(a, 2)
                ans(i, j) = ans(i, j) + a(i, k) * x(k, j)
            Next
        Next j
    Next i
    multiplication = ans()