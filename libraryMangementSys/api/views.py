from django.http import JsonResponse

# Create your views here.
def bookHome(request):
    return JsonResponse({"API":"Welcome to book home"})