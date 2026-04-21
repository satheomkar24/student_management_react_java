import Swal from 'sweetalert2';

export const CustomSwal = Swal.mixin({
  showCancelButton: true,
  confirmButtonColor: 'rgb(255, 102, 102)',
  cancelButtonColor: '#65b4ff',
  confirmButtonText: 'Yes',
  cancelButtonText: 'No',
});
