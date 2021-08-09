from django.db import models
from djpaypal.models.webhooks import webhook_handler


@webhook_handler("payment.sale.completed")
def on_payment_received(event, **kwargs):
    payment = event.get_resource()
    print("Received payment:", payment)
