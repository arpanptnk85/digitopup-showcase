# backend/main.py
from django.http import JsonResponse
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def user_wallet(request):
    return JsonResponse({
        "user": request.user.username,
        "balance": 1250.75,
        "currency": "INR"
    })
